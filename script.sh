#!/bin/bash
BASEPATH="/home/dewi/Downloads";
source deepspeech/bin/activate &>/dev/null;
deepspeech --model $BASEPATH/deepspeech-0.9.3-models.pbmm --scorer $BASEPATH/deepspeech-0.9.3-models.scorer   --audio $1;
