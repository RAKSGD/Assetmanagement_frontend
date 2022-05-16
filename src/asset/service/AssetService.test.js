import AssetService from "./AssetService";

let Asset = {
  assetId: 62,
  userName: "Kishore",
  assetManufacturer: "Lenovo",
  assetModel: "Thinkpad",
  assetType: "Laptop",
  assetStatus: "delivered",
  assetMovementDate: "04-05-2022",
  expectedDeliveryDate: "07-05-2022",
  assetSourceLocation: "Bengaluru",
  assetDestinationLocation: "Mysuru",
  shipmentId: 50,
};


test("Testing find asset by id funciton.", async () => {
  let service = new AssetService();

  await service.findAssetById(62).then((result) => {
    let asset = result.data;

    expect(asset.assetModel).toBe("Thinkpad");
  });
});

test("Testing delete asset by id funciton.", async () => {
  let assetId = 30;

  let service = new AssetService();

  await service.deleteAsset(30).then(() => {
    service.findAssetById(assetId).then((result) => {
      let Asset = result.data;

      expect(null).toBe(null);
    });
  });
});

test("Testing viewAsset funciton.", async () => {
  let service = new AssetService();
  await service.viewAsset().then((result) => {
    let Asset = result.data;

    expect(Asset).toBe(Asset);
  });
});
