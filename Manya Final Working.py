from selenium import webdriver
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
import subprocess
import time

def settorprofile():
    profile = FirefoxProfile(r'C:\Users\kalra\Desktop\Tor Browser\Browser\TorBrowser\Data\Browser\profile.default')
    profile.set_preference('network.proxy.type', 1)
    profile.set_preference('network.proxy.socks', '127.0.0.1')
    profile.set_preference('network.proxy.socks_port', 9150)
    profile.set_preference("network.proxy.socks_remote_dns", False)
    profile.update_preferences()
    return profile

def runtor():
    torexe=r'C:\Users\kalra\Desktop\Tor Browser\Browser\firefox.exe'
    torhandle = subprocess.Popen([torexe,"/min"])
    return torhandle

def voteexec(profile):
    driver = webdriver.Firefox(firefox_profile=profile)
    driver.get("http://www.speakforindiadelhi.com/speaker.php")
    driver.execute_script("window.scrollTo(0,400)")
    driver.find_element_by_id(61852).click()
    time.sleep(1)
    message = driver.find_element_by_xpath("/html/body/div[1]/div[3]/div[1]/div[2]/div/span").text
    time.sleep(1)
    driver.close()
    return message

vote_count=0
for i in range(2):
    tor=runtor()
    if (voteexec(settorprofile())=="Thank you for your vote"):
        vote_count+=1
    tor.terminate()  #Terminate Tor proxy to renew on next start
    print("No. instances run:",i+1 ,"\nNo. of Votes:",vote_count)
    time.sleep(2)