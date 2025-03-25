import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
  Grid2,
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";
import { Job, JobRunOptions, rundeckApi } from "@/api";
import theme from "@/style/theme";

interface Props {
  serviceId: string;
  onCancel: () => void;
}

const ServiceRunner: FunctionComponent<Props> = ({ serviceId, onCancel }) => {
  const [service, setService] = useState<Job>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await rundeckApi.getJobById(serviceId);
        setService(data);
      } catch (err) {
        setError("Failed to fetch service details");
        console.error(err);
      }
    };

    fetchService();
  }, [serviceId]);

  const handleSubmit = async (formData: FormData) => {
    const runArgs: JobRunOptions = {};

    if (service && service.options) {
      service.options.forEach((option) => {
        if (formData.has(option.name)) {
          runArgs[option.name] = formData.get(option.name)!.toString();
        }
      });
    }

    await runJob(runArgs);
  };

  const runJob = (args: JobRunOptions) => rundeckApi.runJob(serviceId, args);
  if (!service)
    return (
      <div>
        <CircularProgress />
      </div>
    );
  if (error) return <div className="error">{error}</div>;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        zIndex: 1000,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "90%",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          bgcolor: "background.paper",
          border: "2px solid rgba(88, 101, 242, 0.4)",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            {service.name}
          </Typography>
          {service.description && (
            <Typography>description: {service.description}</Typography>
          )}
          <form action={handleSubmit}>
            {service.options && (
              <Grid2 container spacing={3} justifyContent="center">
                <Grid2 size={{ xs: 12, sm: 8, md: 10 }}>
                  {service.options.map((option) => (
                    <FormControl
                      key={option.name}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      required={!!option.required}
                    >
                      <InputLabel htmlFor={option.name}>
                        {option.label || option.name}
                      </InputLabel>
                      {option.values ? (
                        <Select
                          id={option.name}
                          name={option.name}
                          defaultValue={option.defaultValue}
                          aria-describedby={`${option.name}-helper`}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                backgroundColor:
                                  theme.palette.background.default,
                              },
                            },
                          }}
                        >
                          {option.values.map((itemValue) => (
                            <MenuItem key={itemValue} value={itemValue}>
                              {itemValue}
                            </MenuItem>
                          ))}
                        </Select>
                      ) : (
                        <Input
                          id={option.name}
                          name={option.name}
                          defaultValue={option.defaultValue}
                          aria-describedby={`${option.name}-helper`}
                        />
                      )}
                      <FormHelperText id={`${option.name}-helper`}>
                        {option.description}
                      </FormHelperText>
                    </FormControl>
                  ))}
                </Grid2>
              </Grid2>
            )}
            <Grid2 container spacing={1} justifyContent="center">
              <Button variant="contained" onClick={onCancel} sx={{ mt: 2 }}>
                Cancel
              </Button>
              <Button variant="contained" sx={{ mt: 2 }} type="submit">
                Start
              </Button>
            </Grid2>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServiceRunner;
