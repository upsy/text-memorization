import { Separator } from "@/components/ui/separator";


function App() {

  const text = `Please note that the following items are available for testing on IAT:
<br/><br/>
<br/>- OCR Section Extracted values are displayed with uppercase
<br/>- Update P3 Administration Dashboard with new Streamline clients
<br/>- Creation of P3 SQL Dashboard
<br/>- 2 BPMS Performance part 1 DB structure update. No immediate effect on performance quality, should only be checked old functionalities are still working properly
<br/>- 6 Subtask 3 & 5 automatically move cursor to next empty fields when scanning documents and automatically add empty field after filling last empty field
<br/>- 14 Duplicate search Add possibility to reject all documents that are on Duplicate Verification if user did't accept any of them  
<br/>- 15 Task Performance Automatically populate with B53 subcategory when Szkolenia BHP HACCP category is used
<br/>
<br/>List will be updated once we have new snapshot available.
`;

  return (
    <div className="flex flex-col w-full p-8 justify-center font-sans">
      <FirstLetter text={text} />
      <Separator className="my-4" />
      <p className="max-w-prose">{text}</p>
    </div>
  )
}

export default App



function FirstLetter({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <div className="max-w-prose flex-inline">
      {words.map((word, ind) => <FLWord word={word} key={word + ind}></FLWord>)}
    </div>
  )
}

function FLWord({ word }: { word: string }) {

  const firstLetter = word.length > 3 ? word[0] : '';
  const restOfWord = firstLetter ? word.substring(1, word.length) : word;
  return (
    <div className="flex-inline relative">
      <span className="mr-1">
        <span className="opacity-40">{firstLetter}</span>
        <span >{restOfWord}</span>
      </span>
      <input className="w-[1ch] left-0 top-0 absolute"></input>
    </div>

  )
}