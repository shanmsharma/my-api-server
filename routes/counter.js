const express = require('express');
const router = express.Router();
const fs = require('fs-extra');

const DB_PATH = './db.json';

// Utility: Read current count
function readCount() {
  const db = fs.readJsonSync(DB_PATH);
  return db.counter?.count || 0;
}

// Utility: Write new count
function writeCount(newCount) {
  const db = fs.readJsonSync(DB_PATH);
  db.counter = { count: newCount };
  fs.writeJsonSync(DB_PATH, db, { spaces: 2 });
}

// GET current count
router.get('/', (req, res) => {
  res.json({ count: readCount() });
});

// POST to increment
router.post('/increment', (req, res) => {
  const current = readCount();
  const newCount = current + 1;
  writeCount(newCount);
  res.json({ count: newCount });
});

module.exports = router;

