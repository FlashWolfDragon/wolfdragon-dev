from collections import defaultdict
from os import path
import csv
import requests
import json
from pprint import pprint
from time import sleep

messages = defaultdict(list)
downloadPictures = True

with open('library/scoutrfishfacts.csv') as file:
    reader = csv.reader(file)
    next(reader)  # skip header
    for row in reader:
        messages[row[1][:10]].insert(0, row[2])
        if row[3] != '':
            # Download image
            # Add image path to dictionary
            # Remember if image was marked as spoiler
            urls = row[3].split(' ')

            for url in urls:
                imgName = url[58:].replace('/', '_')
                imgPath = f'/images/fishfacts/{imgName}'
                messages[row[1][:10]].append(imgPath)

                if downloadPictures and not path.exists(imgPath):
                    with open(imgPath, 'wb') as img:
                        print(f'downloading {url}')
                        response = requests.get(url)
                        img.write(response.content)
                        sleep(5)

json.dump(messages, open('library/messages.json', 'w'))
