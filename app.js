const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const input = process.argv[2];
const execPath = process.argv[3];
const extensions = process.argv.slice(3).map((ext) => ext.startsWith('.') ? ext.toUpperCase() : '.' + ext.toUpperCase());

const files = [];
getFiles(input);

console.log('Searching files...');
function getFiles(dir)
{
	const entryes = fs.readdirSync(dir);
	for (let entry of entryes)
	{
		const p = path.join(dir, entry);
		const stat = fs.statSync(p);
		if (stat.isDirectory())
		{
			getFiles(p);
		}
		else if (extensions.includes(path.extname(p).toUpperCase()))
		{
			files.push(p);
		}
	}
}

console.log('Randomise files...');
files.sort(() => getRandomSign());

for (let i = 0; i < files.length; i++)
{
	const rndFile = files[getRandomInt(files.length)];
	console.log(`${i + 1}: ${rndFile}`);
	try
	{
		execFileSync(execPath, [rndFile]);
	}
	catch(e)
	{
		console.log('Execution error: ' + e);
		process.exit(1);
	}
}

function getRandomInt(max)
{
	return Math.floor(Math.random() * max);
}

function getRandomSign()
{
	return getRandomInt(3) - 1;
}