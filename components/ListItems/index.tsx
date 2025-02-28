import { styles } from "@/global/styles/home/styles";
import { themes } from "@/global/themes";
import { IResponseBarcodes } from "@/interfaces/services/interface.barcode";
import { FontAwesome } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


type IListItemsProps = {
    data: IResponseBarcodes,
    editingItemId: number | null
    newDescription: string 
    handleNewDescription: (item:string) => void
    handleEdit: (item: number) => void
    handleSave: (item: number) => void
    handleDelete: (item: number) => void
}

export const ListItems = ({ data, editingItemId,newDescription,handleNewDescription,handleEdit,handleSave,handleDelete }: IListItemsProps) => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>Código: {data.code}</Text>
        {editingItemId === data.id ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.inputEdit}
              value={newDescription}
              onChangeText={(values) => handleNewDescription(values)}
            />
          </View>
        ) : (
          <>
            {data.description && (
              <Text style={styles.itemText}>{data.description}</Text>
            )}
          </>
        )}
      </View>

      <View style={styles.itemActions}>
        {editingItemId !== data.id ? (
          <TouchableOpacity
            onPress={() => handleEdit(data.id)}
          >
            <FontAwesome
              name="edit"
              size={20}
              style={{ color: themes.colors.secondary }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleSave(data.id)}>
            <FontAwesome
              name="check"
              size={20}
              style={{ color: themes.colors.primary }}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => handleDelete(data.id)}>
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );