
var quoteList = [
    {quote:`"You miss 100% of the shots you don't take."`, author:"--Wayne Gretzy" },
    {quote:`"Resentment is like drinking poison and waiting for your enemies to die."`, author:"--Nelson Mandela" },
    {quote:'"Its not what happens to you, but how you react to it that matters."', author:"--Epictetus" },
    {quote:'"The best revenge is massive success."', author:"--Frank Sinatra" },
    {quote:'"Do not take life too seriously. You will not get out alive."'
         , author:"--Elbert Hubbard" },
    {quote:`"In three words I can sum up everything I've learned about life: it goes on."` , author:"--Robert Frost" },
    {quote:'"You only live once, but if you do it right, once is enough."' , author:"--Mai West" },
]

function displayQuote(){
    var indx= randomN(6,0)
    var cartona = 
        `  <p>
        ${
            quoteList[indx].quote
        }

            </p>
            <p>
     ${
            quoteList[indx].author
        }
            </p>
        `
        ;
    
    document.getElementById("qData").innerHTML=cartona

}

function randomN(maxN,minN) {
    minN = Math.ceil(minN);
    maxN = Math.floor(maxN);
    return Math.floor(Math.random() * (maxN - minN + 1) + minN);
  }

