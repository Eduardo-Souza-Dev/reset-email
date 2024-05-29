#!/bin/sh
# Use this script to test if a given TCP host/port are available

set -e

TIMEOUT=15
QUIET=0
HOST=""
PORT=""
CMD=""
WAIT_INTERVAL=1

usage()
{
  echo "Usage: $0 host:port [-t timeout] [-q] [-- command args]"
  echo " -q | --quiet                      Don't output any status messages"
  echo " -t TIMEOUT | --timeout=timeout    Timeout in seconds, zero for no timeout"
  echo " -- COMMAND ARGS                   Execute command with args after the test finishes"
  exit 1
}

wait_for()
{
  if [[ "${TIMEOUT}" -gt 0 ]]; then
    echo "Waiting forrr ${HOST}:${PORT}..."
  fi

  start_ts=$(date +%s)
  while :
  do
    (echo > /dev/tcp/${HOST}/${PORT}) >/dev/null 2>&1
    result=$?
    if [[ $result -eq 0 ]]; then
      end_ts=$(date +%s)
      echo "Connected to ${HOST}:${PORT} after $((end_ts - start_ts)) seconds"
      break
    fi
    sleep ${WAIT_INTERVAL}
  done
}

while [[ $# -gt 0 ]]
do
  case "$1" in
    *:* )
    HOST=$(printf "%s\n" "$1"| cut -d : -f 1)
    PORT=$(printf "%s\n" "$1"| cut -d : -f 2)
    shift 1
    ;;
    -q | --quiet)
    QUIET=1
    shift 1
    ;;
    -t)
    TIMEOUT="$2"
    if [[ ${TIMEOUT} -eq 0 ]]; then
      TIMEOUT=999999999
    fi
    shift 2
    ;;
    --timeout=*)
    TIMEOUT="${1#*=}"
    shift 1
    ;;
    --)
    shift
    CMD="$@"
    break
    ;;
    --help)
    usage
    ;;
    *)
    echo "Unknown argument: $1"
    usage
    ;;
  esac
done

if [[ -z "${HOST}" || -z "${PORT}" ]]; then
  echo "Error: you need to provide a host and port to test."
  usage
fi

wait_for

if [[ -n "${CMD}" ]]; then
  exec "${CMD}"
fi