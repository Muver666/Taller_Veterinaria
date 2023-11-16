import React, { useState } from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

import DateTimePicker from "react-native-ui-datepicker";

const Formulario = (props) => {
  const [fecha, setFecha] = useState(new Date());
  const [paciente, setPaciente] = useState("");
  const [nombrePropietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [camposValidos, setCamposValidos] = useState({
    paciente: true,
    nombrePropietario: true,
    email: true,
    telefono: true,
    sintomas: true,
  });

  const validarCampos = () => {
    const nuevosCamposValidos = {
      paciente: paciente.trim() !== "",
      nombrePropietario: nombrePropietario.trim() !== "",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      telefono: /^\d{10}$/.test(telefono),
      sintomas: sintomas.trim() !== "",
    };

    setCamposValidos(nuevosCamposValidos);

    return Object.values(nuevosCamposValidos).every((campo) => campo);
  };

  return (
    <Modal animationType="slide" visible={props.modalVisible}>
      <ScrollView contentContainerStyle={styles.contenido}>
        <Text style={styles.titulo}>
          Nueva <Text style={styles.tituloBold}>Cita</Text>
        </Text>

        <Pressable
          style={styles.btnCancelar}
          onPress={() => props.setModalVisible(!props.modalVisible)}
        >
          <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
        </Pressable>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre del paciente</Text>
          <TextInput
            style={[
              styles.input,
              !camposValidos.paciente && styles.inputInvalido,
            ]}
            placeholder="Ingrese el nombre del paciente"
            placeholderTextColor={"#666"}
            value={paciente}
            onChangeText={(text) => {
              setPaciente(text);
              setCamposValidos({
                ...camposValidos,
                paciente: text.trim() !== "",
              });
            }}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre del propietario</Text>
          <TextInput
            style={[
              styles.input,
              !camposValidos.nombrePropietario && styles.inputInvalido,
            ]}
            placeholder="Ingrese el nombre del propietario"
            placeholderTextColor={"#666"}
            value={nombrePropietario}
            onChangeText={setPropietario}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email del propietario</Text>
          <TextInput
            style={[styles.input, !camposValidos.email && styles.inputInvalido]}
            placeholder="Ingrese el email del propietario"
            placeholderTextColor={"#666"}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono del propietario</Text>
          <TextInput
            style={[
              styles.input,
              !camposValidos.telefono && styles.inputInvalido,
            ]}
            placeholder="Ingrese el teléfono del propietario"
            placeholderTextColor={"#666"}
            keyboardType="number-pad"
            value={telefono}
            onChangeText={setTelefono}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha</Text>
          <View style={styles.FechaContenedor}>
            <DateTimePicker
              date={fecha}
              locale="es"
              mode="date"
              onValueChange={(date) => setFecha(date)}
            />
          </View>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas del paciente</Text>
          <TextInput
            style={[
              styles.input,
              styles.SintomasInput,
              !camposValidos.sintomas && styles.inputInvalido,
            ]}
            placeholder="Ingrese los síntomas del paciente"
            placeholderTextColor={"#666"}
            value={sintomas}
            onChangeText={setSintomas}
            multiline={true}
            rows={4}
          />
        </View>

        <Pressable
          style={styles.btnNuevaCita}
          onPress={() => {
            const camposSonValidos = validarCampos();

            if (camposSonValidos) {
              Alert.alert("Campos enviados con éxito");
            } else {
              Alert.alert(
                "Error",
                "Todos los campos son obligatorios o tienen un formato inválido"
              );
            }
          }}
        >
          <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
        </Pressable>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#000000",
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
  },
  tituloBold: {
    fontWeight: "900",
  },
  campo: {
    marginTop: 10,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  FechaContenedor: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    borderColor: "#FFF",
    borderWidth: 2,
    marginTop: 5,
  },
  SintomasInput: {
    height: 100,
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: "#1E3B8D",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnCancelarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: "#1E3B8D",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "900",
    fontSize: 16,
  },
  inputInvalido: {
    backgroundColor: "#FFEBE6",
    borderColor: "#FF5252",
    borderWidth: 2,
    borderRadius: 10,
    color: "#FF0000",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});

export default Formulario;
