#!/bin/bash
while true; do
  git add .
  git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
  git push
  sleep 20
done
