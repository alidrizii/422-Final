const fs = require('fs');
const path = require('path');
const { parse } = require('csv');

module.exports = {
    watched: null,
    output: null,
    processed: null,

    // Setters to configure folder paths
    setWatched: function (watch) {
        this.watched = watch;
        console.info(`Watched folder set: ${watch}`);
    },
    setOutput: function (out) {
        this.output = out;
        console.info(`Output folder set: ${out}`);
    },
    setProcessed: function (proc) {
        this.processed = proc;
        console.info(`Processed folder set: ${proc}`);
    },

    // Handle file change: read, parse CSV, and write JSON
    processChange: function (file) {
        const outputFile = path.resolve(this.output, path.basename(file).replace('.csv', '.json'));
        const processedFile = path.resolve(this.processed, path.basename(file));
        let rows = [];

        fs.createReadStream(file)
            .pipe(parse({
                columns: true,
                trim: true
            }))
            .on('data', (row) => {
                rows.push(row);
            })
            .on('end', () => {
                // Move file to processed folder
                fs.rename(file, processedFile, (err) => {
                    if (err) {
                        console.error(`Failed to move file to processed: ${file}`, err);
                        return;
                    }

                    // Write JSON output
                    fs.writeFile(outputFile, JSON.stringify(rows, null, 2), (err) => {
                        if (err) {
                            console.error(`Failed to write JSON output for: ${file}`, err);
                            return;
                        }

                        console.info(`Successfully parsed and saved: ${file}`);
                        console.info('\x1b[38;2;0;0;170m%s\x1b[0m', `Parsed ${file}`);
                    });
                });
            })
            .on('error', (err) => { console.error(`Error processing CSV file: ${file}`, err); });
    }
};