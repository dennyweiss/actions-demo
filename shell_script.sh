#!/usr/bin/env bash

SHELL_SCRIPT_RESULT_OK=${SHELL_SCRIPT_RESULT_OK:-false}

if [[ "${SHELL_SCRIPT_RESULT_OK}" == 'ok' ]]; then
  echo "INFO:  SHELL_SCRIPT_RESULT_OK: '${SHELL_SCRIPT_RESULT_OK}'"
  exit 0
else
  echo "ERROR: SHELL_SCRIPT_RESULT_OK: '${SHELL_SCRIPT_RESULT_OK}'"
  exit 1
fi