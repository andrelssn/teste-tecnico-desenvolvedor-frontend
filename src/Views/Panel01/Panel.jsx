import {
    Box,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Button,
} from "@mui/material";

export default function Panel() {
    return (
        <Container sx={{ py: 6 }}>
            <Typography
                variant="h5"
                align="center"
                sx={{ mb: 4, fontSize: "42px", width: 600, margin: "auto" }}
            >
                Por que a{" "}
                <Typography component="span" color="var(--green)" fontSize={"42px"}>
                    Contabilidade.com
                </Typography>{" "}
                é a melhor opção {`{cidade}`}?
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ mt: 10 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ color: "var(--green)", fontSize: "22px" }}>
                                Benefícios inclusos no seu pacote
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell align="left" sx={{ fontSize: "22px" }}>
                                Média de Mercado
                            </TableCell>
                        </TableRow>

                        {[
                            { beneficio: "Certificado Digital", preco: "R$ 200/ano" },
                            { beneficio: "Abertura de empresa, 100% digital", preco: "R$ 700/ano" },
                            { beneficio: "Contabilidade Consultiva", preco: "R$ 5.880,00/mês" },
                            { beneficio: "Conta PJ gratuita, digital e integrada à sua contabilidade", preco: "R$ 756,00/ano" },
                            { beneficio: "Atendimento personalizado por telefone e WhatsApp a partir do plano de entrada", preco: "R$ 1.920/ano" },
                        ].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ fontSize: "18px" }}>{item.beneficio}</TableCell>
                                <TableCell align="center">
                                    <Typography color="var(--green)" sx={{ fontSize: "18px", p: "10px 140px" }}>
                                        incluso
                                    </Typography>
                                </TableCell>
                                <TableCell align="left" sx={{ fontSize: "18px" }}>
                                    {item.preco}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box textAlign="center" mt={4}>
                <Typography fontSize={28} color="var(--green)">
                    Uma economia média de <span style={{ fontWeight: "bold" }}>R$ 9.456/ano</span>
                </Typography>
            </Box>

            <Box textAlign="center" mt={3}>
                <Button
                    size="large"
                    variant="contained"
                    sx={{
                        borderRadius: "50px",
                        textTransform: "none",
                        px: 4,
                        py: 1.5,
                        backgroundColor: "#2f80ed",
                        "&:hover": { backgroundColor: "#256cd6" },
                    }}
                >
                    Abrir empresa grátis
                </Button>
            </Box>
        </Container>
    );
}
