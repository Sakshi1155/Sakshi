// Create a variable to hold your NFTs
var nfts = []; 

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, roll, college, age) {
    const nft = {
        "name": name,
        "roll": roll,
        "college": college,
        "age": age
    };
    nfts.push(nft);
    console.log("NFT minted: " + name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs () {
    for (var i = 0; i < nfts.length; i++) {
        console.log("\nName: " + nfts[i].name);
        console.log("Roll: " + nfts[i].roll);
        console.log("College: " + nfts[i].college);
        console.log("Age: " + nfts[i].age);
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nThe total number of NFTs minted is: " + nfts.length);
}

// Call your functions below this line
mintNFT("Sakshi", 11232, "Chandigarh University", 20);
listNFTs();
getTotalSupply();
