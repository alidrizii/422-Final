module.exports = {
    setSafeExits: () => {
        // Handle normal program exit (when process.exit is called or script finishes)
        process.on('exit', (code) => {
            console.info();
            // Blue
            console.info('\x1b[38;2;0;0;170m%s\x1b[0m', 'Shutting down the Document Parser');
            console.info();
        });

        // Handle Ctrl+C (SIGINT) signal from the keyboard to shut down
        process.on('SIGINT', () => {
            console.info();
            // Orange
            console.info('\x1b[38;2;255;165;0m%s\x1b[0m', 'Caught SIGINT (Ctrl+C)');
            console.info();

            process.exit();
        });

        // Handle kill signal (SIGTERM) from the operating system or server
        process.on('SIGTERM', () => {
            console.info();
            // Blue
            console.info('\x1b[38;2;0;0;170m%s\x1b[0m', 'Caught SIGTERM');
            console.info();

            process.exit();
        });

        // Handle unexpected errors that weren’t caught earlier
        process.on('uncaughtException', (err) => {
            console.info();
            // Red
            console.error('\x1b[38;2;255;0;0m%s\x1b[0m', 'Uncaught exception:', err);
            console.info();

            process.exit(1);
        });

        // Optional: runs before exiting to signal the process will end soon
        process.on('beforeExit', (code) => {
            console.info();
            // Orange
            console.info('\x1b[38;2;255;165;0m%s\x1b[0m', 'Process will exit soon with code:', code);
            console.info();
        });
    }
};