
import os
import re
import subprocess
import shutil
pathC="C:/Users/Alexandru Andercou/Downloads/"

baseName="infinitysave"
pattern=r''+baseName+'*'
ext=".json";

regexp = re.compile(pattern)

files=os.listdir(path=pathC)



for file in files:
  if re.search(pattern,file) is not None:
    nameFile=pathC+file
    shutil.copy(nameFile, './')
    print(file)

os.system("git add .")



os.system("git commit -m \"first\"")

os.system("git push origin main")



