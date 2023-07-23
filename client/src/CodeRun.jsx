import React, { useState } from 'react'

const CodeRun = () => {
    const [code, setCode] = useState("")
    const [output, setOutput] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const data = await fetch("http://localhost:5000/execute/runCode", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ code })
            })
    
            const {output} = await data.json()
            setOutput(output)
        } catch (err) {
            return { error: err.message }
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <textarea style={{ padding: "1.5rem", marginBottom: '2rem' }}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          cols={80}
          placeholder="Enter your code here..."
        />
        <br />
        <button style={{ marginRight: "1rem" }} type="submit">Run Code</button>
        <button onClick={ e => setCode("") } type="submit">Clear</button>
        </form>
        <div>
        <h2>Output:</h2>
        <pre>{ output }</pre>
      </div>
    </div>
  )
}

export default CodeRun