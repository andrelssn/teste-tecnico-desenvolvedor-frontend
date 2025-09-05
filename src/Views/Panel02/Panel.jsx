import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Chip,
    Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";

export default function Panel02() {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h5" align="center" sx={{ mb: 1, fontWeight: 500, fontSize: "34px", width: "500px", margin: "auto" }}>
                Escolha o{" "}
                <Typography component="span" color="var(--green)" sx={{ fontSize: "34px" }}>
                    plano contábil
                </Typography>{" "}
                ideal para sua empresa
            </Typography>

            <Box textAlign="center" my={3}>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: "50%",
                        minWidth: "48px",
                        minHeight: "48px",
                        mr: 1,
                    }}
                >
                    ▶
                </Button>

                <Typography variant="body1" component="span">
                    Entenda os planos
                </Typography>
            </Box>

            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Card
                        variant="outlined"
                        sx={{
                            borderRadius: 4,
                            borderColor: "var(--green)",
                            borderWidth: 2,
                            textAlign: "center",
                            position: "relative",
                            overflow: "visible",
                            height: "100%",
                        }}
                    >
                        <CardContent sx={{ px: 3, py: 4 }}>
                            <Chip
                                label="MAIS CONTRATADO"
                                color="success"
                                sx={{
                                    position: "absolute",
                                    top: -16,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                }}
                            />

                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                Plano PJ
                            </Typography>

                            <Typography
                                variant="body2"
                                color="error"
                                sx={{ textDecoration: "line-through" }}
                            >
                                R$ 240
                            </Typography>

                            <Typography variant="h4" fontWeight={700}>
                                R$ 199
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    /MENSAL
                                </Typography>
                            </Typography>

                            <Stack spacing={1.2} alignItems="flex-start" mt={3}>
                                <Typography variant="body2">
                                    Faturamento Mensal: Ideal até 50 mil*
                                </Typography>

                                <Typography variant="body2">
                                    Notas fiscais: até 10 notas/mês
                                </Typography>

                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Abertura Gratuita
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Certificado digital e-CNPJ
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Plataforma com emissor e gestão financeira
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Contabilidade, pró-labore e entrega de obrigações
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Atendimento WhatsApp, e-mail, telefone e vídeo
                                    </Typography>
                                </Box>
                            </Stack>

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    backgroundColor: "#2f80ed",
                                    "&:hover": { backgroundColor: "#256cd6" },
                                }}
                            >
                                Comece grátis
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card
                        variant="outlined"
                        sx={{
                            borderRadius: 4,
                            borderColor: "grey.300",
                            textAlign: "center",
                            height: "100%",
                        }}
                    >
                        <CardContent sx={{ px: 3, py: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                Plano PJ Plus
                            </Typography>

                            <Typography
                                variant="body2"
                                color="error"
                                sx={{ textDecoration: "line-through" }}
                            >
                                R$ 320
                            </Typography>

                            <Typography variant="h4" fontWeight={700}>
                                R$ 249
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    /MENSAL
                                </Typography>
                            </Typography>

                            <Stack spacing={1.2} alignItems="flex-start" mt={3}>
                                <Typography variant="body2">
                                    Faturamento Mensal: Ideal até 100 mil*
                                </Typography>

                                <Typography variant="body2">
                                    Notas fiscais: até 50 notas/mês
                                </Typography>

                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Tudo que contém o Plano PJ
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <AddIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Entrega do IRPF de 1 sócio(a)
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <AddIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Relatórios contábeis mensais
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <AddIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Multibenefícios (i)
                                    </Typography>
                                </Box>
                            </Stack>

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    backgroundColor: "#2f80ed",
                                    "&:hover": { backgroundColor: "#256cd6" },
                                }}
                            >
                                Comece grátis
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card
                        variant="outlined"
                        sx={{
                            borderRadius: 4,
                            borderColor: "grey.300",
                            textAlign: "center",
                            height: "100%",
                        }}
                    >
                        <CardContent sx={{ px: 3, py: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                Plano PJ VIP
                            </Typography>

                            <Typography
                                variant="body2"
                                color="error"
                                sx={{ textDecoration: "line-through" }}
                            >
                                R$ 500
                            </Typography>

                            <Typography variant="h4" fontWeight={700}>
                                R$ 329
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    /MENSAL
                                </Typography>
                            </Typography>

                            <Stack spacing={1.2} alignItems="flex-start" mt={3}>
                                <Typography variant="body2">
                                    Faturamento Mensal: Ideal até 100 mil*
                                </Typography>

                                <Typography variant="body2">
                                    Notas fiscais: até 100 notas/mês
                                </Typography>

                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Tudo que contém o Plano PJ e Plus
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <AddIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Gestão financeira completa (i)
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <AddIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Pró-labore até 2 sócios(as) grátis
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <AddIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Pagamentos de contas
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <AddIcon sx={{ color: "var(--green)" }} fontSize="small" />
                                    <Typography variant="body2" ml={1}>
                                        Distribuição de lucros
                                    </Typography>
                                </Box>
                            </Stack>

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    backgroundColor: "#2f80ed",
                                    "&:hover": { backgroundColor: "#256cd6" },
                                }}
                            >
                                Comece grátis
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
