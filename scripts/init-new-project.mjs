#!/usr/bin/env node
import { mkdir, readdir, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

function parseArgs(argv) {
  const args = {
    target: '',
    name: '',
    repository: '',
    purpose: '',
  };

  for (let i = 0; i < argv.length; i += 1) {
    const current = argv[i];
    const next = argv[i + 1];
    if (current === '--target' || current === '-t') {
      args.target = next || '';
      i += 1;
    } else if (current === '--name' || current === '-n') {
      args.name = next || '';
      i += 1;
    } else if (current === '--repository' || current === '-r') {
      args.repository = next || '';
      i += 1;
    } else if (current === '--purpose' || current === '-p') {
      args.purpose = next || '';
      i += 1;
    }
  }

  return args;
}

function usage() {
  console.log(
    [
      'Usage:',
      '  npm run init:new-project -- --target <dir> --name <project-name> [--repository <url>] [--purpose <text>]',
      '',
      'Example:',
      '  npm run init:new-project -- --target ../my-project --name "My Project" --repository https://github.com/me/my-project --purpose "Build a reusable app with the protocol"',
    ].join('\n'),
  );
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

async function copyDirectory(sourceDir, targetDir) {
  await mkdir(targetDir, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(sourcePath, targetPath);
      continue;
    }

    await copyFile(sourcePath, targetPath);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.target || !args.name) {
    usage();
    fail('Missing required flags: --target and --name');
  }

  const repoRoot = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
  const templateRoot = path.join(repoRoot, 'templates', 'new-project');
  const targetRoot = path.resolve(process.cwd(), args.target);

  await mkdir(targetRoot, { recursive: true });
  await copyDirectory(templateRoot, targetRoot);

  const readmePath = path.join(targetRoot, 'README.md');
  const adapterPath = path.join(targetRoot, '.agent', 'project-adapter.md');
  const nextPath = path.join(targetRoot, '.agent', 'next.md');

  const readme = `# ${args.name}\n\nThis project was initialized with the Agent Collaboration Protocol.\n\n## Protocol Adoption\n\n- Core protocol: vendored or referenced from the protocol repository\n- Project adapter: .agent/project-adapter.md\n- Next action: .agent/next.md\n`;

  const adapter = `# Project Adapter\n\nproject name: ${args.name}\nproject repository: ${args.repository || 'TODO'}\nproject purpose: ${args.purpose || 'TODO'}\n\nrepository layout:\n  - entry points:\n  - key docs:\n  - key modules:\n\nfirst read order:\n  -\n\nbuild commands:\n\ntest commands:\n\nverification commands:\n\nhigh-risk areas:\n  -\n\nproject-specific constraints:\n  -\n\nhandoff contacts:\n  - planning/review agent:\n  - implementation agent:\n\nreview focus:\n  -\n\nrecommended next action:\n`;

  const next = `# Next\n\ncurrent status: INITIALIZED\nrecommended next action: Fill in the project adapter and decide the first execution phase.\n`;

  await writeFile(readmePath, readme, 'utf8');
  await writeFile(adapterPath, adapter, 'utf8');
  await writeFile(nextPath, next, 'utf8');

  console.log(`Initialized new project scaffold at ${targetRoot}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
