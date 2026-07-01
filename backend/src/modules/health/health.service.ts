export const getHealthStatus = () => {
  return {
    status: "OK",
    service: "ProjectIQ Backend",
    timestamp: new Date().toISOString(),
  };
};