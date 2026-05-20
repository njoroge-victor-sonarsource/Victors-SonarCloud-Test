function main() {
    // Issue: Unused variable
    // var unusedVariable = 42;

    // Issue: Empty catch block (Code Smell)
    try {
        let x = 10 / 0;
    } catch (e) {
        // console.error(e);
    }
}
