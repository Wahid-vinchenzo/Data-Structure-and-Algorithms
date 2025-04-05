function interpret(command) {
    return command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o');
}