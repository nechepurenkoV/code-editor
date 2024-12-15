export type ExecuteCodeRequest = {
  language: string;
  code: string;
};

export type ExecuteCodeResponse = {
  status: "success" | "error";
  output?: string;
  error?: string;
};

export const executeCode = async ({
  language,
  code,
}: ExecuteCodeRequest): Promise<ExecuteCodeResponse> => {
  try {
    const response = await fetch("/api/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, code }),
    });

    return await response.json();
  } catch (error) {
    return {
      status: "error",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
