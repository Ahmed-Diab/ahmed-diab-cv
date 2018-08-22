import { ShoesShopModule } from './shoes-shop.module';

describe('ShoesShopModule', () => {
  let shoesShopModule: ShoesShopModule;

  beforeEach(() => {
    shoesShopModule = new ShoesShopModule();
  });

  it('should create an instance', () => {
    expect(shoesShopModule).toBeTruthy();
  });
});
