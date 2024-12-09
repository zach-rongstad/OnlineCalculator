document.getElementById("pdfButton").addEventListener("click", () => {
  const gpa = document.getElementById("gpa").textContent;

  const blob = new Blob(["Your GPA is " + gpa], {type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "gpa.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

