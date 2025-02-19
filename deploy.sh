#!/bin/bash
cd /curd
git pull origin main
pm2 restart all  # or use your process manager or restart command
