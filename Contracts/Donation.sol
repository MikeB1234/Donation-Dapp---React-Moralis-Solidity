pragma solidity 0.8.0;

contract Donation {
    function donate() external payable {}

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
