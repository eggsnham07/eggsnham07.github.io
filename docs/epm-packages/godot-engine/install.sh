#!/bin/bash
export GODOT_VERSION=3.5

function failed() {
	echo "$1"
	exit 1
}

echo ""
echo "Creating directories"
if ! [[ -d "/home/$USER/.local/bin/res" ]]; then
	mkdir -p ~/.local/bin/res > /dev/null && echo "Created /home/$USER/.local/bin" || failed "Could not create dir '/home/$USER/.local/bin"
fi
if [[ -f "/home/$USER/.local/bin/Godot_v$GODOT_VERSION-stable_x11.64" ]]; then
	echo ""
	echo "Removing previous install"
	rm ~/.local/bin/Godot_v$GODOT_VERSION-stable_x11.64 && echo "Removed." || failed "Unable to remove /home/$USER/.local/bin/Godot_v$GODOT_VERSION-stable_x11.64"
fi

echo ""
echo "Downloading executable and icon"

curl https://downloads.tuxfamily.org/godotengine/$GODOT_VERSION/Godot_v$GODOT_VERSION-stable_x11.64.zip -# --output /tmp/Godot_$GODOT_VERSION.zip || failed "Failed to run curl for executable"
curl https://git.eggsnham.com/content/Godot.png -# --output /tmp/GodotLogo.png || failed "Failed to run curl for desktop icon"

echo ""
echo "Unzipping"
unzip /tmp/Godot_$GODOT_VERSION.zip -d ~/.local/bin || failed "Could not unzip /tmp/Godot_$GODOT_VERSION.zip"
mv /tmp/GodotLogo.png ~/.local/bin/res
echo ""
echo "Creating desktop file for application menu"
echo "[Desktop Entry]" >> ~/.local/share/applications/godot-engine.desktop
echo "Name=Godot Engine" >> ~/.local/share/applications/godot-engine.desktop
echo "Exec=/home/$USER/.local/bin/Godot_v$GODOT_VERSION-stable_x11.64" >> ~/.local/share/applications/godot-engine.desktop
echo "Icon=/home/$USER/.local/bin/res/GodotLogo.png" >> ~/.local/share/applications/godot-engine.desktop
echo "Type=Application" >> ~/.local/share/applications/godot-engine.desktop
echo "Terminal=false" >> ~/.local/share/applications/godot-engine.desktop
echo "Categories=Game,Development" >> ~/.local/share/applications/godot-engine.desktop
echo ""
echo "[PLEASE READ]"
echo "When this command is done you need to run 'sudo update-desktop-database' to find godot engine in you application list"
echo ""
echo "Removing tmp zip file"
rm -rf /tmp/Godot_$GODOT_VERSION.zip || echo "Unable to remove /tmp/Godot_$GODOT_VERSION.zip"
echo "Done installing Godot Engine executable!" 
