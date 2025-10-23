contract Test {
    function main() external pure {
        assembly {
            return(100000, 0)
        }
    }
}
