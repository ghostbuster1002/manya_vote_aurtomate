from selenium import webdriver
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
import subprocess
import time

def settorprofile():
    profile = FirefoxProfile(r'C:\Users\kalra\Desktop\Tor Browser\Browser\TorBrowser\Data\Browser\profile.default')
    profile.set_preference('network.proxy.type', 1)
    profile.set_preference('network.proxy.socks', '127.0.0.1')
    profile.set_preference('network.proxy.socks_port', 9050)
    profile.set_preference("network.proxy.socks_remote_dns", False)
    profile.update_preferences()
    return profile

    # info = subprocess.STARTUPINFO()
    # info.dwFlags = subprocess.STARTF_USESHOWWINDOW
    # info.wShowWindow = 0

def runtor():
    torrc=r'C:\Users\kalra\Desktop\Tor Browser\Browser\TorBrowser\Data\Tor\torrc'
    torexe=r'C:\Users\kalra\Desktop\Tor Browser\Browser\TorBrowser\Tor\tor.exe'
    torhandle = subprocess.Popen([torexe,"-f",torrc,"| more"])
    return torhandle
    #torexe = subprocess.Popen(r'C:\Users\kalra\Desktop\Tor Browser\Browser\firefox.exe')  #Run Tor proxy
    #torexe = subprocess.Popen(r'C:\Users\kalra\Desktop\Tor Browser\Browser\TorBrowser\Tor\tor.exe -f .\torrc | more')  # Run Tor proxy

i=0
#for i in range(50):
m=k=0

#tor=runtor()
profile=settorprofile()
driver = webdriver.Firefox(firefox_profile= profile)
driver.get("http://www.speakforindiadelhi.com/speaker.php")
driver.execute_script("window.scrollTo(0,400)")
driver.find_element_by_id(61852).click()
time.sleep(1)
message=driver.find_element_by_xpath("/html/body/div[1]/div[3]/div[1]/div[2]/div/span").text
print(message)
if (message=="Thank you for your vote"):
    k+=1
driver.close()      #End selenium session
tor.terminate()  #Terminate Tor proxy to renew on next start
print("No. instances run:",i ,"\n No. of Votes:",k)
time.sleep(2)