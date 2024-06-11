Set WshShell = WScript.CreateObject("WScript.Shell")

' open Microsoft Edge and navigate to the YouTube video
WshShell.Run "microsoft-edge:https://www.youtube.com/watch?v=dQw4w9WgXcQ"

' wait 5 seconds
WScript.Sleep 5000

' display the message
WScript.Echo "You have been hacked by NASA!"

