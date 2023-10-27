const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const formidable = require('express-formidable');
const app = express();
const port = 5656;
require('dotenv').config();

app.use(cors());
app.use(formidable());

const mainServer = process.env.MAINSERVER || 'http://192.168.0.100:4646';
console.log(`main Server: ${mainServer}` )

const saveJsonFile = async (filename, data)=>{
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, jsonData);
    console.log(`JSON data saved to ${filename}`);
}
const readJsonFile = (filename)=>{
    const jsonData = fs.readFileSync(filename, 'utf-8');
    const data = JSON.parse(jsonData);
    return data;
}
const removePreviousImages = ()=>{
    directoryPath = './images';
    try {
      // Read the contents of the directory
      const files = fs.readdirSync(directoryPath);
  
      // Loop through the files and subdirectories
      for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
  
        if (stats.isDirectory()) {
          // If it's a subdirectory, recursively empty it
          emptyDirectory(filePath);
          // After emptying the subdirectory, remove it
          fs.rmdirSync(filePath);
        } else {
          // If it's a file, delete it
          fs.unlinkSync(filePath);
        }
      }
    } catch (error) {
      console.error(`Error emptying directory: ${directoryPath}`, error);
    }
  }
const saveImageFromUrl = async(imageUrl, outputFilePath)=>{
    try {
        const response = await axios.get(imageUrl, { responseType: 'stream' });
        const writer = fs.createWriteStream(outputFilePath);
    
        response.data.pipe(writer);
    
        return new Promise((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
        });
      } catch (error) {
        throw new Error(`Error downloading the image: ${error.message}`);
    }
}
const htmlToPlainText =(htmlText)=>{
    // Load the HTML text into Cheerio
    const $ = cheerio.load(htmlText);
  
    // Use Cheerio to select all the text nodes and concatenate them
    const plainText = $('*')
      .contents()
      .map(function () {
        return this.type === 'text' ? $(this).text() : '';
      })
      .get()
      .join(' ');
  
    return plainText.replace(/\n/g, ' ').trim();
}
const downLoadItem =async(key)=>{
    const fetchingUrl = `https:/kiddingaroundtoys.com/products/${key.split('/')[4]}.js`;
    const response = (await axios.get(fetchingUrl)).data;
    const data = {};
    data.key = key;
    data.title = response.title;
    data.price_varies = response.price_varies;
    if(response.compare_at_price!=null){
        data.price = `${(response.compare_at_price/ 100).toFixed(2)}`;
        data.discounted_price = `${(response.price/ 100).toFixed(2)}`;
    }else{
        data.price = `${(response.price/ 100).toFixed(2)}`;
        data.discounted_price = null;
    }
    // data.description = htmlToPlainText(response.description);
    const sizeOption = response.options.find(option => option.name === "Size" || option.name === "SIZE");
    data.sizes = sizeOption ? sizeOption.values : null;
    
    data.images = response.media.map(media => media.src);

    // removePreviousImages();
    // for(let i=0;i<data.images.length;i++){
    //     const url = (new URL(data.images[i])).pathname;

    //     const parts = url.split("/");
    //     const fileName = parts[parts.length - 1];
    //     const fileTypeParts = fileName.split('.');
    //     const fileType = fileTypeParts[fileTypeParts.length-1];
    //     await saveImageFromUrl(data.images[i],`./images/${i}.${fileType}`);
    // }



    return data;
}
app.get('/downloadCurrent', async (req, res) => {
    res.json(await downLoadItem(req.query.key))
});
app.get('/loadItem', async (req, res) => {

  res.json((await axios(`${mainServer}/loadItem?user=${req.query.key}`)).josn());
});
app.get('/done',async (req, res) => {
  const resposne = await axios(`${mainServer}/done?position=${req.query.position}`);
  // console.log(await response.json())
console.log(response)
  // res.json(await axios(`${mainServer}/done?position=${req.query.position}`));
});
app.get('/skip',async (req, res) => {
  res.json(await axios(`${mainServer}/skip?position=${req.query.position}`));
});

app.listen(port);