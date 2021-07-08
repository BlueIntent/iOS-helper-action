#!/bin/bash

if !(which xchelper >/dev/null); then
  echo "Installing xchelper"
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/BlueIntent/xchelper/main/scripts/install.sh)"
  echo "Done!"
fi

xchelper $1