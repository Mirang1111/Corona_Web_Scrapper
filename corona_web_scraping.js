const cheerio = require("cheerio");
const request = require("request");
const chalk = require("chalk");
console.log("Before");
request('https://www.worldometers.info/coronavirus/' , cb);
console.log("After");
function cb(error,response,html)
{
 if(error)
 {
 console.error('error: ' , error);
 }
 else
 {
  take(html);
  //console.log('html :' , html); 
 }
}

function take(html)
{
  let selector_tool = cheerio.load(html);
  let array = selector_tool("#maincounter-wrap span");
  // [i] --> wrap array[i] inside the selector tool 
  //for(let i = 0 ; i< array.length ; i++)
  //{
    // let data = selector_tool(array[i]).text();
    // console.log("data" , data);
  //}
  let total = selector_tool(array[0]).text();
  let deaths = selector_tool(array[1]).text();
  let recovered = selector_tool(array[2]).text();
  console.log(chalk.gray("Total Cases" , total));
  console.log(chalk.red("Deaths" , deaths));
  console.log(chalk.yellow("Recovered" ,recovered ));

}