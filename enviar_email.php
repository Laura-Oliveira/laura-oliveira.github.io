//isset checa se o botão enviar foi clicado e só vai disparar o email se for verdadeiro
if(isset($_POST['enviar'])){
    $assunto = "contato portfolio";

    // pegando os dados do form...
    $msg = "Nome: " . $_POST["name"] . "<br>";
    $msg .= "Email: " . $_POST["email"] . "<br>";
    $msg .= "Assunto: " . $_POST["assunto"] . "<p>";
    $msg .= "Telefone: " . $_POST["telefone"] . "<p>";
    $msg .= "Mensagem: " . $_POST["mensagem"] . "<p>";
    $msg .= "Mensagem:<br>" . $_POST["mensagem"];

    // email onde tu vai receber a mensagem
    $destinatario = "laura.regina.cp@gmail.com";

    // headers que prepara a mensagem
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: " . $_POST["nome"] . "<" . $_POST["email"] . ">\r\n";
    $headers .= "Reply-To: " . $_POST["email"] . "\r\n";

    // envia o email...
    mail($destinatario,$assunto,$msg,$headers);
}