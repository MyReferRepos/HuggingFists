#!/bin/sh
sleep 5
first=0
if [ -f "/home/datayoo/logs/brackets/sys.log" ];then
  first=1
fi
./home/datayoo/scripts/brackets start
if [ $first==0 ];then
    mkdir -p /home/datayoo/logs/brackets
    touch /home/datayoo/logs/brackets/sys.log
    ln -sf /proc/1/fd/1 /home/datayoo/logs/brackets/sys.log
fi
tail -f /dev/null

