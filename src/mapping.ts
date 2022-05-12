import {
  ipfs,
  json,
  TypedMap,
  Bytes,
  JSONValue,
} from "@graphprotocol/graph-ts";
import { Transfer as TransferEvent } from "../generated/NFT/NFT";
import { Token, User } from "../generated/schema";

const IPFS_HASH = "QmR2wmDSCcbZnByZJrhJk92ZxtSmxxw5965cyJ4veV8qXA";

// TODO: Event to update metadata
// TODO: Understand why i64/i32 casting

export function handleTransfer(event: TransferEvent): void {
  /* load the token from the existing Graph Node */
  let token = Token.load(event.params.tokenId.toString());

  token = new Token(event.params.tokenId.toString());
  token.tokenID = event.params.tokenId;
  token.tokenURI = "/" + event.params.tokenId.toString();

  const metadata = ipfs.cat(IPFS_HASH + token.tokenURI);

  if (metadata) {
    const value = json.fromBytes(metadata).toObject();
    if (value) {
      // SAVE STATIC DATA
      const image = value.get("image");
      const name = value.get("name");
      const description = value.get("description");
      const externalURL = value.get("external_url");

      token.uri = "ipfs.io/ipfs/" + IPFS_HASH + token.tokenURI;

      if (name) token.name = name.toString();
      if (image) token.image = image.toString();
      if (externalURL) token.externalURL = externalURL.toString();
      if (description) token.description = description.toString();

      // SAVE NON-STATIC DATA
      const metrics = value.get("metrics");
      if (metrics) {
        const metricsData = metrics.toObject();

        const totalScore = metricsData.get("total_score");
        const residentialScore = metricsData.get("residential_score");
        const commercialScore = metricsData.get("commercial_score");
        const industrialScore = metricsData.get("industrial_score");
        const residentialBuildings = metricsData.get("residential_buildings");
        const commercialBuildings = metricsData.get("commercial_buildings");
        const industrialBuildings = metricsData.get("industrial_buildings");
        const publicBuildings = metricsData.get("public_buildings");

        if (totalScore) token.totalScore = totalScore.toI64() as i32;
        if (residentialScore)
          token.residentialScore = residentialScore.toI64() as i32;
        if (commercialScore)
          token.commercialScore = commercialScore.toI64() as i32;
        if (industrialScore)
          token.industrialScore = industrialScore.toI64() as i32;
        if (residentialBuildings)
          token.residentialBuildings = residentialBuildings.toI64() as i32;
        if (commercialBuildings)
          token.commercialBuildings = commercialBuildings.toI64() as i32;
        if (industrialBuildings)
          token.industrialBuildings = industrialBuildings.toI64() as i32;
        if (publicBuildings)
          token.publicBuildings = publicBuildings.toI64() as i32;
      }
    }
  }

  token.updatedAt = event.block.timestamp;

  /* set or update the owner field and save the token to the Graph Node */
  token.owner = event.params.to.toHexString();
  token.save();

  /* if the user does not yet exist, create them */
  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}
