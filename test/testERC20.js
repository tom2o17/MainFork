const IERC20 = artifacts.require("IERC20");
const aaveLendingPool = artifacts.require("ILendingPool");
//import "./aaveAbi";

contract('IERC20', (accounts) => {
  const ERC20Token = "0x66d28cb58487a7609877550e1a34691810a6b9fc";
  const Whale = '0x187a51120e736f271900227bfbd95ec109ee2bc4'

  it("get Dai Balance", async () => {
    const token = await IERC20.at(ERC20Token)
    const bal = await token.balanceOf(Whale)
    console.log(`bal: ${bal}`);
  });
});

contract('AAVE', (accounts) => {
  // https://docs.aave.com/developers/the-core-protocol/protocol-data-provider#getreserveconfigurationdata
  it("connect to the AAVE lending pool", async () => {
    const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const poolInstance = await aaveLendingPool.at("0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9");
    // Fetches the interest on the AAVE Polygon chain. The deposit APY is at the 3rd index position

    var depositUSDTApyPolygon = (await poolInstance.getReserveData("0xdAC17F958D2ee523a2206206994597C13D831ec7"))[3]
    var interestUSDTApyPolygon = (await poolInstance.getReserveData("0xdAC17F958D2ee523a2206206994597C13D831ec7"))[3]
    
    console.log(depositApy);  
  });
});