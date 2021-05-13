#!/bin/bash
set -x;
BASEPATH="/home/dewi/Downloads";
pwd && source deepspeech/bin/activate; >&2 deepspeech --model $BASEPATH/deepspeech-0.9.3-models.pbmm --scorer $BASEPATH/deepspeech-0.9.3-models.scorer   --audio $1;
