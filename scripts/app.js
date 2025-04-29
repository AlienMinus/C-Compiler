document.getElementById("compile").addEventListener("click", async () => {
    const code = document.getElementById("code").value;
    const outputElement = document.getElementById("output");

    // Clear previous output
    outputElement.textContent = "";

    if (!code.trim()) {
        outputElement.textContent = "Please write some C code to compile.";
        return;
    }

    try {
        console.log("Sending code to API...");
        const response = await fetch("https://api.jdoodle.com/v1/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                script: code,
                language: "c",
                versionIndex: "0",
                stdin: "",
                compileOnly: false,
                clientId: "c766ea6867a5f6b17a8735839a16fa1d", // Replace with your JDoodle client ID
                clientSecret: "a7364e02440c30fa7d5511b95fd0c0786cf8e44cf12142478e584be7b90e2cb", // Replace with your JDoodle client secret
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response:", result);

        if (result.output) {
            outputElement.textContent = result.output;
        } else {
            outputElement.textContent = "No output received.";
        }
    } catch (error) {
        console.error("Error during API call:", error);
        outputElement.textContent = `Compilation failed: ${error.message}`;
    }
});