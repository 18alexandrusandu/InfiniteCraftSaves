
import os
import re
import shutil
import time

pathC="C:/Users/Alexandru Andercou/Downloads/"

baseName="infinitysave"
baseName2="infinitecraft"

pattern=r''+baseName+'*'
pattern2=r''+baseName2+'*'
ext=".json";

regexp = re.compile(pattern)


while 1:

 print("again")
 files=os.listdir(path=pathC)
 filesHere=os.listdir(path=pathC)
 
 status = os.stat(pathC)
 print("status:")
 print(status)
 for file in files:
  if (re.search(pattern,file) is not None) or  (re.search(pattern2,file) is not  None):
    nameFile=pathC+file
    shutil.copy(nameFile, './')
    print(file)




 os.system("git add .")
 os.system("git commit -m \"first\"")
 os.system("git push origin main")
 time.sleep(120)


