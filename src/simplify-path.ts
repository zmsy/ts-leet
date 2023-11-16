function simplifyPath(path: string): string {
  const stack: string[] = [];
  for (const val of path.split("/")) {
    if (val === ".." && stack.length > 0) {
      stack.pop();
    } else if (![".", "..", ""].includes(val)) {
      stack.push(val);
    }
  }

  return "/" + stack.join("/");
}
