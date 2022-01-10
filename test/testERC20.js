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

  it("connect to the AAVE lending pool", async () => {
    const poolInstance = await aaveLendingPool.at("0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9");
    console.log(`${poolInstance.methods}`);  
  });
});