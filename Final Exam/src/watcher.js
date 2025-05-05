const parser = require('./parser');
const chokidar = require('chokidar');

const ignore = [
    '.DS_Store',
    '.Spotlight-V100',
    '.Trashes',
    'ehthumbs.db',
    'Thumbs.db'
];

module.exports = {
    watch: (watched, output, processed) => {
        // Set folder paths in the parser module
        parser.setWatched(watched);
        parser.setOutput(output);
        parser.setProcessed(processed);

        console.info('Watcher initialized.');
        console.info('Watching folder:', watched);

        console.info();
        console.info('\x1b[38;2;0;0;170m%s\x1b[0m', 'Watching folder:');
        console.info(`${watched}`);
        console.info();

        // Use chokidar because fs.watch is a pile of garbage
        const watcher = chokidar.watch(watched, {
            ignored: (path, stats) => {
                return stats?.isFile() && !path.endsWith('.csv')
            },
            persistent: true
        });

        // On new file added, pass it to parser
        watcher
            .on('add', (path) => {
                console.info(`New file detected: ${path}`);
                parser.processChange(path);
            })
            .on('error', (err) => {
                console.error('Watcher encountered an error:', err);
            });
    }
};