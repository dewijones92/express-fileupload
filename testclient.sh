#!/bin/bash
set -x;
 function test {
	 rand=$RANDOM;
	 curl -F "sampleFile=@/home/dewi/Downloads/test.wav" http://localhost:8000/upload && echo $rand | ts;
 }
test & test & test & test
