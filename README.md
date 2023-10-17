A program for cyclically opening random files of specified extensions from a specified folder.
```
<Path to a folder with files> <Path to a program that can open the files> <list of extensions>
```
An example of showing a random photos in Windows:
```
node app.js "e:\Photo" "C:\Program Files\XnViewMP\xnviewmp.exe" jpg png bmp
```
An example of showing a random videos in Windows:
```
node app.js "R:\video" "C:\Program Files (x86)\Light Alloy\LA.exe" 3GP AMV AVC AVIFLV MKV MOV MP4 MPEG TS VDR VOB WEBM WMV
```