
function App() {

  const text = `Please note that the following items are available for testing on IAT:

OCR Section Extracted values are displayed with uppercase
-	Update P3 Administration Dashboard with new Streamline clients
-	Creation of P3 SQL Dashboard
-	2 BPMS Performance part 1 DB structure update. No immediate effect on performance quality, should only be checked old functionalities are still working properly
-	6 Subtask 3 & 5 automatically move cursor to next empty fields when scanning documents and automatically add empty field after filling last empty field
-	14 Duplicate search Add possibility to reject all documents that are on Duplicate           Verification if user didn’t accept any of them  
-	15 Task Performance Automatically populate with B53 subcategory when Szkolenia BHP HACCP category is used

List will be updated once we have new snapshot available.
`;

  return (
    <div className="flex  w-full p-8 justify-center font-sans">
      <FirstLetter text={text} />

    </div>
  )
}

export default App



function FirstLetter({ text }: { text: string }) {
  return (
    <p className="max-w-prose">
      {text}
    </p>
  )
}