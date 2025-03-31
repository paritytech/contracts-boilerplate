// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title MagicWord
 * @dev store zah magic word get back zah magic sentence!
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract MagicWord {

    string private magicWord;
    string[] private constant adjectives = [
        "amazing", "awesome", "brilliant", "beautiful", "brave", 
        "bold", "bright", "calm", "charming", "cheerful", 
        "clever", "colorful", "comfortable", "confident", "considerate", 
        "cool", "courageous", "creative", "curious", "daring", 
        "dazzling", "delightful", "determined", "diligent", "dynamic", 
        "eager", "elegant", "enchanting", "energetic", "enthusiastic", 
        "excellent", "exceptional", "exciting", "extraordinary", "fabulous", 
        "fantastic", "fearless", "friendly", "fun", "funny", 
        "generous", "gentle", "glorious", "good", "gorgeous", 
        "graceful", "great", "happy", "harmonious", "helpful", 
        "honest", "honorable", "humorous", "imaginative", "impressive", 
        "independent", "innovative", "intelligent", "interesting", "joyful", 
        "kind", "knowledgeable", "lively", "lovely", "loyal", 
        "lucky", "magnificent", "marvelous", "mighty", "mysterious", 
        "nice", "outstanding", "passionate", "peaceful", "perfect", 
        "pleasant", "positive", "powerful", "precious", "pretty", 
        "radiant", "remarkable", "resilient", "resourceful", "respectful", 
        "shining", "silly", "sincere", "skillful", "smart", 
        "smiling", "special", "splendid", "stellar", "strong", 
        "stunning", "superb", "talented", "terrific", "thoughtful", 
        "thrilling", "trustworthy", "vibrant", "victorious", "wonderful"
    ];
    
    constructor() {
    }

    function inputMagicWord(string memory word) public {
        magicWord = word;
    }

    function makeMagicBaby() public view returns (string memory) {
        require(bytes(magicWord).length > 0, "No magic word has been stored yet");
        uint256 randomIndex = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao))) % adjectives.length;
        return string(abi.encodePacked(magicWord, " is ", adjectives[randomIndex], "!"));
    }
    
    function getCurrentMagicWord() public view returns (string memory) {
        return magicWord;
    }
}
