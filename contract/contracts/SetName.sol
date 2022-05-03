// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SetName {
  string public name;
  event Name(string);
  function setName(string calldata _name) external {
      name = _name;
      emit Name(_name);
  }

  function readName() external view returns(string memory){
      return name;
  }
}
